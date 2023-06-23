import { type Metadata } from 'next'

import { ServersList } from '~/app/servers/servers-lits'

export const metadata: Metadata = {
  title: 'Servers',
  description: 'Browse detailed information about the current serevrs online',
}

export default async function ServersPage() {
  return (
    <div className="container">
      <section className="flex max-w-[980px] flex-col items-start gap-2 pb-8 pt-8 md:pt-12">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Servers
        </h1>

        <span className="inline-block max-w-[750px] align-top text-lg text-muted-foreground sm:text-xl">
          Browse detailed information about the current serevrs online.
        </span>
      </section>

      <div className="flex">
        <div className="flex-1">
          <ServersList />
        </div>
      </div>
    </div>
  )
}
