import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-01/app-integration-01'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const integrations = [
  {
    name: 'Notion',
    description: 'Share documents directly from your Notion workspace with seamless integration.',
    image: 'https://www.notion.so/images/logo-ios.png',
    alt: 'Notion'
  },
  {
    name: 'Slack',
    description: 'Share secure document links directly in Slack channels and conversations.',
    image: 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png',
    alt: 'Slack'
  },
  {
    name: 'API Integration',
    description: 'Build custom integrations with our powerful REST API and webhooks.',
    image: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png',
    alt: 'API Integration'
  }
]

export default function AppIntegrationSection() {
  return (
    <section className='py-24 md:py-32 bg-background'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-6 md:grid-cols-2'>
          <div className='space-y-4'>
            <h2 className='text-4xl md:text-5xl font-bold lg:text-6xl'>
              Integrate with your favorite tools
            </h2>
            <p className='text-xl text-muted-foreground'>
              Connect DoQshare with the tools you already use. Seamlessly share documents, track engagement, and collaborate with your team across platforms.
            </p>
            <Button size='lg' className='rounded-lg text-base shadow-sm' asChild>
              <Link href="/features">View all integrations</Link>
            </Button>
          </div>

          <div className='space-y-6'>
            {integrations.map((integration, index) => (
              <div key={index} className='bg-card border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow'>
                <div className='flex items-center gap-6'>
                  <div className='flex size-16 shrink-0 items-center justify-center rounded-md border bg-muted'>
                    <img src={integration.image} alt={integration.alt} className='size-10 object-contain' />
                  </div>
                  <div>
                    <h3 className='text-xl font-medium mb-1'>{integration.name}</h3>
                    <p className='text-base text-muted-foreground'>{integration.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

