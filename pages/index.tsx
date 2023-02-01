import React, { FC } from 'react'
import {motion} from "framer-motion";
import { services } from '@/data'
import { GetServerSidePropsContext } from 'next'
import { fadeInUp, stagger } from '../animations'
import { Service } from '../types'
import ServiceCard from '@/components/ServiceCard'

const Home: FC<Service[]> = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h5 className="my-3 text-base font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100">
        <h4 className='my-3 text-xl font-semibold tracking-wide '>
          What I am doing
        </h4>
        <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
              </motion.div>
          ))}
          
        </motion.div>
        
      </div>

    </div>
  )
}

export default Home

// export async function getServerSideProps(context:GetServerSidePropsContext) {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();
//   console.log('services', data)
//   return {
//     props:{
//       services: data
//     }
//   }
// }

// export async function getStaticProps(context:GetServerSidePropsContext) {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();
//   console.log('services', data)
//   return {
//     props:{
//       services: data
//     }
//   }
// }