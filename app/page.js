import Image from 'next/image'
import Link from 'next/link'
import nikeShoe from '../images/nike-shoe.jpg'

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col m-10">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click here to read the text
        </div>
        <div className="collapse-content">
          <p>hello</p>
          <p>
            These prompts can be used with AI models to generate text, perform tasks,
            or provide information on a wide range of topics and applications.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      <div className="card mt-10 w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src={nikeShoe}
            alt="Shoes"
            width={400}
            height={400}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link href="/notes" className="btn btn-primary">Buy NOW</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
