import React from 'react'
import smCat from './sm-cat.svg'
import mdCat from './md-cat.svg'
import lgCat from './lg-cat.svg'

const Pricing = () => {
  return (
    <div className='px-16 py-32 bg-primary'>
      <div className='text-center text-5xl mb-5 font-heading text-button-primary lg:text-pricing-header'>
        Pricing
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-5 text-pricing-content'>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col bg-button-primary rounded-lg p-1 w-full max-w-xs'>
            <div className='h-32 bg-button-primary overflow-hidden'>
              <img src={smCat} className='h-full w-full mt-10' alt='cat' />
            </div>
            <div className='text-center rounded-lg bg-primary p-4 text-button-primary'>
              <div className='text-2xl font-heading text-pricing-sub-header'>
                Personal
              </div>
              <div>1 Pillar Page (4000 Words Each)</div>
              <div>2 SEO Articles (2000 Words Each)</div>
              <div>3 Custom Banners</div>
              <div>3 Social Media Posts</div>
              <div>Customized Content Strategy</div>
              <div>Dedicated Account Manager</div>
              <div className='text-pricing-content-bold'>$1000 / month</div>
              <button className='bg-button-primary hover:bg-gray-700 text-primary text-pricing-content-bold font-bold py-2 px-4 mt-4 rounded-full'>
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div className='flex flex-col bg-button-primary rounded-lg p-1 w-full max-w-xs'>
            <div className='h-32 bg-button-primary overflow-hidden'>
              <img src={mdCat} className='h-full w-full mt-10' alt='cats' />
            </div>
            <div className='text-center rounded-lg bg-primary p-4 text-button-primary'>
              <div className='text-2xl font-heading text-pricing-sub-header'>
                Startup
              </div>
              <div>3 Pillar Pages (4000 Words Each)</div>
              <div>6 SEO Articles (2000 Words Each)</div>
              <div>9 Custom Banners</div>
              <div>Customized Content Strategy </div>
              <div>Dedicated Account Manager</div>
              <div className='text-pricing-content-bold'>$2500 / month</div>
              <button className='bg-button-primary hover:bg-gray-700 text-primary text-pricing-content-bold font-bold py-2 px-4 mt-4 rounded-full'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col bg-button-primary rounded-lg p-1 w-full max-w-xs'>
            <div className='h-32 bg-button-primary overflow-hidden'>
              <img
                src={lgCat}
                className='h-full w-full mt-10'
                alt='too many cats'
              />
            </div>
            <div className='text-center rounded-lg bg-primary p-4 text-button-primary'>
              <div className='text-2xl font-heading'>Enterprise</div>
              <div>6 Pillar Pages (4000 Words Each)</div>
              <div>14 SEO Articles (2000 Words Each)</div>
              <div>20 Custom Banners</div>
              <div>Customized Content Strategy </div>
              <div>Dedicated Account Manager</div>
              <div className='text-pricing-content-bold'>$5000 / month</div>
              <button className='bg-button-primary hover:bg-gray-700 text-primary  font-bold py-2 px-4 mt-4 rounded-full'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
