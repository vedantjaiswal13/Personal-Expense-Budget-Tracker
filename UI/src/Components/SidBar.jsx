import React from 'react'
import { LayoutDashboard } from 'lucide-react';
import { ArrowLeftRight } from 'lucide-react';
import { CircleDollarSign } from 'lucide-react';
import { ListSortAscending } from 'lucide-react';
import { ChartColumnIncreasing } from 'lucide-react';
const SidBar = () => {

  const navItems = [
  { label: 'DashBoard', icon: <LayoutDashboard />, href: '' },
  { label: 'Transacations', icon: <ArrowLeftRight />, href: '' },
  { label: 'Budgets', icon: <CircleDollarSign />, href: '' },
  { label: 'Categories', icon: <ListSortAscending />, href: '' },
  { label: 'Reports', icon: <ChartColumnIncreasing />, href: '' },
];
  return (
    <div className='w-50 shadow-sm'>
      <ul className='list-none flex flex-wrap gap-5 p-4'>
       {navItems.map((item, index) => (
      <li key={index} className='w-full '>
       <a href={item.href} className="rounded-lg  p-2 flex gap-3 transition duration-200 hover:scale-105 hover:bg-[rgb(189,255,206)]">
      {item.icon}
      {item.label}
    </a>
    </li>
))}
      </ul>
    </div>
  )
}

export default SidBar
