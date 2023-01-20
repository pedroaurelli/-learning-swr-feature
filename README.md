# Maneira correta de consumir API em projetos React

## stale-while-revalidate
stale-while-revalidate é a estratégia de primeiro retornar os dados do cache (stale), depois enviar a solicitação de fetch (revalidate), e finalmente retornar com os dados atualizados.

- SWR: https://swr.vercel.app/pt-BR
- React Query: https://react-query-v3.tanstack.com/

## React-Query x SWR

O React Query fornece features como automatic retries, refetch on interval, caching/suspense integration, cancelation tokens, global state management, suporte ao SSR, e mais. O SWR, por outro lado, se concentra principalmente em fornecer hooks para data fetching.


