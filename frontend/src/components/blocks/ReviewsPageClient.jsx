'use client';

import { useReviews } from '@/hooks/useReviews';

export function ReviewsPageClient({ initialReviews }) {
  const {
    reviews,
    loading,
    error,
    refetch,
  } = useReviews({
    initialReviews,
    // Como já recebemos dados via SSR, não precisamos de fetch automático.
    fetchOnMount: initialReviews.length === 0,
  });

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-50 px-4 py-10 font-sans dark:bg-black">
      <main className="w-full max-w-3xl rounded-xl bg-white p-8 shadow-sm dark:bg-zinc-900">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Receitas
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Lista consumindo a API de receitas com SSR + hook de dados.
            </p>
          </div>
          <button
            type="button"
            onClick={refetch}
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Recarregar
          </button>
        </header>

        {loading && (
          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-300">
            Carregando reviews...
          </p>
        )}

        {error && (
          <p className="mb-4 text-sm text-red-600 dark:text-red-400">
            Erro ao carregar reviews: {error}
          </p>
        )}

        {reviews.length === 0 && !loading && !error && (
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Nenhuma review cadastrada ainda.
          </p>
        )}

        <ul className="space-y-4">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {review.rating}
              </h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {review.comment}
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {review.author}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

