import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

import type { ReqResUserListResponse, User } from '../interfaces/reqres.interface'

const loadUsers = async (page: number): Promise<User[]> => {
  try {
    const response = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
      params: {
        page
      }
    })

    const { data } = response.data
    return data
  } catch (error) {
    console.error('Error loading users:', error)
    return []
  }
}

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const currentPage = useRef(1)

  useEffect(() => {
    loadUsers(currentPage.current)
      .then(setUsers)
  }, [])

  const nextPage = async () => {
    currentPage.current++
    const newUsers = await loadUsers(currentPage.current)

    if (newUsers.length === 0) {
      currentPage.current--
      return
    }

    setUsers(newUsers)
  }

  const previousPage = async () => {
    if (currentPage.current === 1) return

    currentPage.current--
    const newUsers = await loadUsers(currentPage.current)

    if (newUsers.length === 0) {
      currentPage.current++
      return
    }

    setUsers(newUsers)
  }

  return {
    users,
    currentPage: currentPage.current,

    nextPage,
    previousPage
  }
}
