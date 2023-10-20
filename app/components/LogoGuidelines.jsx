import Image from 'next/image'
import React from 'react'

import logo from '../content/xprime_logo.png'

const LogoGuidelines = () => {
  return (
    <div className='container flex justify-center items-center pt-16 pb-24'>
        <div className='max-w-[780px] font-[18px] text-gray-600'>
            <h3 className='font-[22px] text-center '>OFFICIAL LOGO</h3>
            <Image src={logo} width={250} height={300} className='mx-auto' />

            <div className='font-[18px] pt-8'>
            <p>XPRIME LOGO USAGE GUIDELINES</p>
            <p className='font-[18px]'>Xprime is a registered trademark (®) Company. The Xprime logo itself is a property of the Xprime Company. The logo and the brand name “Xprime” can only be used by the Xprime Company on their products, websites, and publications.

            <br/><br/>
            Under the following conditions, third parties may use the logo as well:
            </p>

            <ol className='list-decimal'>
                <li className='font-[18px]'>Introduction :</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    The XPrime Furniture Hardware logo is a valuable brand asset. These guidelines ensure the consistent and proper use of our logo in various applications to maintain a strong brand identity.
                    </li>
                </ul>

                <li>Authorized Versions:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    The primary version of our logo consists of the XPrime name and the accompanying graphic element (if applicable). Use only the official logo files provided by XPrime Furniture Hardware.
                    </li>
                </ul>

                <li>Clear Space:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    Maintain a clear space around the logo to ensure its visibility and impact. The clear space should be at least equal to the height of the letter "X" in the logo.
                    </li>
                </ul>

                <li>Minimum Size:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    Do not reduce the logo to a size where it becomes illegible or loses detail. The minimum acceptable size is [specify dimensions].
                    </li>
                </ul>

                <li>Color Variations:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    Use the full-color logo for most applications. In cases where color printing is not possible, a grayscale or black-and-white version is acceptable.
                    </li>
                </ul>

                <li>Color Palette:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    When using the color version of the logo, adhere to the official color palette to maintain consistency. The primary brand colors are [list primary colors], and the secondary colors are [list secondary colors].
                    </li>
                </ul>


                <li>Scaling and Proportions:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    Do not stretch, distort, or alter the proportions of the logo. Use the provided files for resizing.
                    </li>
                </ul>

                <li>Placement:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    Place the logo prominently in all marketing materials, including but not limited to websites, business cards, brochures, and promotional items.
                    </li>
                </ul>

                <li>Typography:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    For text that accompanies the logo, use the specified brand fonts. These               fonts are [list brand fonts].
                    </li>
                </ul>

                <li>Unauthorized Alterations:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    Do not alter or modify the logo in any way. This includes changing colors, adding effects, or altering the typography.
                    </li>
                </ul>

                <li>Social Media and Digital Use:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    When using the logo on social media profiles or websites, ensure that it is displayed in high resolution and follows the guidelines mentioned here.
                    </li>
                </ul>

                <li>Reporting Misuse:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    If you come across unauthorized or improper use of the XPrime Furniture Hardware logo, please report it to [contact email/phone].
                    </li>
                </ul>

                <li>Logo Files:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    Official logo files can be obtained from our brand resources page on our website. Do not recreate the logo.
                    </li>
                </ul>

                <li>Compliance:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    Compliance with these logo usage guidelines is mandatory for all employees, partners, and third parties using the XPrime Furniture Hardware logo.
                    </li>
                </ul>

                <li>Changes to Guidelines:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    XPrime Furniture Hardware reserves the right to update these logo usage guidelines as needed. Users will be notified of any significant changes.
                    </li>
                </ul>

                <li>Contact:</li>
                <ul className='list-disc mt-4 mb-4'>
                    <li>
                    If you have any questions or need assistance with logo usage, please contact [contact email/phone].
                    </li>
                </ul>

                
            </ol>
        </div>

        </div>
    </div>
  )
}

export default LogoGuidelines