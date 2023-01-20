import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useQuery } from 'react-query'

export type Repository = {
  full_name: string
  description: string
}

export default function Page() {
  const { data: repositories, isFetching, error } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/pedroaurelli/repos')

    return response.data
  }, {
    // stale-while-revalidate
    // revalidando o fetch de acordo com o timer passado
    staleTime: 1000 * 60 // 1 minute
  })

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => (
        <li key={repo.full_name}>
          <Link href={`repo/${repo.full_name}`}>{repo.full_name}</Link>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  )
}
