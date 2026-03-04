import { Card } from '@/components/ui/card'
import { 
  Server, 
  Shield, 
  Users, 
  Zap,
  Lock,
  Eye
} from 'lucide-react'

interface DocShareFeaturesProps {
  dictionary: {
    docshare_features: {
      title: string;
      description: string;
      features: {
        self_hosted: { title: string; description: string };
        enterprise_security: { title: string; description: string };
        team_management: { title: string; description: string };
        custom_integrations: { title: string; description: string };
        document_control: { title: string; description: string };
        access_management: { title: string; description: string };
      };
    };
  };
}

export default function DocShareFeatures({ dictionary }: DocShareFeaturesProps) {
  const docshareFeatures = dictionary.docshare_features;
  
  const enterpriseFeatures = [
    {
      icon: Server,
      title: docshareFeatures.features.self_hosted.title,
      description: docshareFeatures.features.self_hosted.description
    },
    {
      icon: Shield,
      title: docshareFeatures.features.enterprise_security.title,
      description: docshareFeatures.features.enterprise_security.description
    },
    {
      icon: Users,
      title: docshareFeatures.features.team_management.title,
      description: docshareFeatures.features.team_management.description
    },
    {
      icon: Zap,
      title: docshareFeatures.features.custom_integrations.title,
      description: docshareFeatures.features.custom_integrations.description
    },
    {
      icon: Lock,
      title: docshareFeatures.features.document_control.title,
      description: docshareFeatures.features.document_control.description
    },
    {
      icon: Eye,
      title: docshareFeatures.features.access_management.title,
      description: docshareFeatures.features.access_management.description
    }
  ]

  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">
            {docshareFeatures.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {docshareFeatures.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border">
                <div className="flex flex-col">
                  <div className="p-3 bg-muted rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}
