"use client";

import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X, Filter } from "lucide-react";
import { BlogPost } from "@/lib/blog-content";

interface BlogSearchFilterProps {
  posts: BlogPost[];
  onFilteredPostsChange: (posts: BlogPost[]) => void;
  categories: string[];
  tags: string[];
}

export function BlogSearchFilter({
  posts,
  onFilteredPostsChange,
  categories,
  tags,
}: BlogSearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(query)) ||
          post.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        post.tags?.some((tag) => selectedTags.includes(tag))
      );
    }

    return filtered;
  }, [posts, searchQuery, selectedCategory, selectedTags]);

  // Update parent component
  useEffect(() => {
    onFilteredPostsChange(filteredPosts);
  }, [filteredPosts, onFilteredPostsChange]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedTags([]);
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedTags.length > 0;

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="space-y-6 mb-12">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 h-12 text-base"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
            onClick={() => setSearchQuery("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Filters:</span>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      {/* Tags Filter */}
      {tags.length > 0 && (
        <div className="space-y-2">
          <span className="text-sm font-medium text-muted-foreground">Tags:</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
        {hasActiveFilters && " (filtered)"}
      </div>
    </div>
  );
}

