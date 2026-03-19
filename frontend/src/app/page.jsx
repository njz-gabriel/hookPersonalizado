import { RecipesPageClient } from '../components/blocks/RecipesPageClient';
import { ReviewsPageClient } from '../components/blocks/ReviewsPageClient';
import { ToggleSection } from "../components/blocks/toggle"

import { Star } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


async function getRecipes() {
  try {
    const res = await fetch('http://localhost:8080/recipes', {
      // Garante SSR sempre fresco, sem cache em build.
      cache: 'no-store',
    });

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch {
    // Em caso de erro no servidor, devolve lista vazia
    // (o hook no client pode lidar com recarregar e mostrar erro)
    return [];
  }
}

async function getReviews() {
  try {
    const res = await fetch('http://localhost:8080/reviews', {
      // Garante SSR sempre fresco, sem cache em build.
      cache: 'no-store',
    });

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch {
    // Em caso de erro no servidor, devolve lista vazia
    // (o hook no client pode lidar com recarregar e mostrar erro)
    return [];
  }
}

// Componente de página é um Server Component por padrão em app router,
// então aqui já estamos fazendo SSR ao buscar os dados com `await getRecipes()`.

export default async function Home() {
  const recipes = await getRecipes();
  const reviews = await getReviews();

  return (
    <>
      <div className='bg-orange-50'>
        <ToggleSection
          recipes={recipes}
          reviews={reviews}
        />
      </div>
    </>
  )
}

