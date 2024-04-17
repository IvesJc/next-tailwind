import Image from 'next/image'
import { Card } from './components/card/Card'
import { Button } from './components/button/Button'

export default function Home() {
  return (
    <main className="xl:container mx-auto">

      <div className="columns-3">
        <Card>
          <h1 className='text-sm text-slate-600'>Tailwind Next</h1>
          <Button>Botão</Button>
        </Card>
        <Card>
          <h1 className='text-sm text-slate-600'>Tailwind Next</h1>
          <Button>Botão</Button>
        </Card>
        <Card>
          <h1 className='text-sm text-slate-600'>Tailwind Next</h1>
          <Button>Botão</Button>
        </Card>
      </div>

    </main>
  )
}
