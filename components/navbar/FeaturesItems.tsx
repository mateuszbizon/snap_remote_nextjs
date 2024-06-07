import IconCalendar from '@/public/icons/IconCalendar'
import IconPlanning from '@/public/icons/IconPlanning'
import IconReminders from '@/public/icons/IconReminders'
import IconTodo from '@/public/icons/IconTodo'
import React from 'react'

const FEATURES_ITEMS_LIST = [
    { title: "Todo List", icon: <IconTodo /> },
    { title: "Calendar", icon: <IconCalendar /> },
    { title: "Reminders", icon: <IconReminders /> },
    { title: "Planning", icon: <IconPlanning /> },
]

function FeaturesItems() {
  return (
    <ul className='flex flex-col gap-3'>
        {FEATURES_ITEMS_LIST.map((item) => {
            return (
                <li key={item.title} className='flex gap-3 text-gray-1'>
                    {item.icon}
                    {item.title}
                </li>
            )
        })}
    </ul>
  )
}

export default FeaturesItems