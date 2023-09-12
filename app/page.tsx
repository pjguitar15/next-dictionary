import React from 'react'

const Home = () => {
  return (
    <main className='py-7 container mx-auto'>
      <h3 className='text-lg text-gray-600 font-semibold underline mb-2'>
        About this App
      </h3>
      <div className='text-gray-500 md:w-3/4 leading-7'>
        <p>
          The <strong>NextJS Dictionary App</strong> is a dynamic and
          feature-rich language tool powered by <strong>Next.js</strong> and a
          robust <strong>Dictionary API</strong>. This web application provides
          users with a seamless experience for exploring word meanings,
          synonyms, antonyms, translations, and example sentences.
        </p>
        <p className='mt-3'>
          With the combination of {`Next.js's`} fast rendering and the extensive
          data from the Dictionary API, users can effortlessly expand their
          vocabulary and language comprehension. Whether {`you're`} a student,
          language enthusiast, or professional, this app is your go-to resource
          for mastering language skills.
        </p>
        <p className='mt-3 italic'>
          Enter any english words that you are not familiar of into the search
          box!
        </p>
      </div>
    </main>
  )
}

export default Home
