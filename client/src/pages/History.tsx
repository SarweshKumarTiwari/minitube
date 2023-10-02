import React from 'react'
import NavBar from '../components/NavBar'
import HistoryNav from './history/HistoryNav'
import HistoryList from './history/HistoryList'

export default function History() {
  return (
    <div>
      <NavBar/>
      <HistoryNav/>
      <HistoryList/>
    </div>
  )
}
