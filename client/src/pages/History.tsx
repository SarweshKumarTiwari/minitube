import HistoryNav from './history/HistoryNav'
import HistoryList from './history/HistoryList'
import HistoryContextProvider from '../contexts/history/HistoryContextProvider'

export default function History() {
  return (
    <div>
      <HistoryContextProvider>
        <HistoryNav />
        <HistoryList />
      </HistoryContextProvider>
    </div>
  )
}
