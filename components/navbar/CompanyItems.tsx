import React from 'react'

const COMPANY_ITEMS_LIST = [
    { title: "History" },
    { title: "Our Team" },
    { title: "Blog" },
]

function CompanyItems() {
  return (
    <ul className='flex flex-col gap-3'>
        {COMPANY_ITEMS_LIST.map((item) => {
            return (
                <li key={item.title} className='text-gray-1 whitespace-nowrap'>
                    {item.title}
                </li>
            )
        })}
    </ul>
  )
}

export default CompanyItems