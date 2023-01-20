import { useRouter } from 'next/router'
import React from 'react'
import { queryClient } from '../../../src/services/queryClient'
import { Repository } from '../..'
import { useQueryClient } from 'react-query'

export default function Repo() {
  const router = useRouter()

  const queryClient = useQueryClient()

  // manipulando estado do cache sem precisar de um refetch no banco
  async function handleUpdateRepoDescription () {
    const previousRepo = queryClient.getQueryData<Repository[]>('repos')

    if (previousRepo) {
      const nextRepos = previousRepo.map(repo => {
        if (`/repo/${repo.full_name}` === router.asPath) {
          return {...repo, description: 'Teste nova descrição'}
        } else {
          return repo
        }
      })

      queryClient.setQueryData('repos', nextRepos)
    }
  }

  return (
    <>
      <h1>Welcome to repo!</h1>
      <h3>{router.asPath}</h3>
      <button onClick={handleUpdateRepoDescription}>Alterar descrição</button>
    </>
  )
}
