"use client"

import { useState } from "react";
import { Star } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { ReviewsPageClient } from "./ReviewsPageClient"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ToggleSection({ reviews, recipes }) {
  const [showReviews, setShowReviews] = useState(false)

  return (
    <>
      <Toggle
        aria-label="Toggle bookmark"
        size="sm"
        variant="outline"
        pressed={showReviews}
        onPressedChange={setShowReviews}
      >
        <Star className="group-data-[state=on]/toggle:fill-foreground" />
        Reviews
      </Toggle>

      {showReviews ? (
        <ReviewsPageClient initialReviews={reviews} />
      ) : (
        <div className='grid grid-cols-4'>
          {recipes.map((receita) => {
            return (
              <Card size="sm" className="mx-auto w-full max-w-sm my-4" key={receita.id}>
                <CardHeader>
                  <CardTitle>{receita.title}</CardTitle>

                  <CardDescription>
                    {receita.prepTime} minuto
                  </CardDescription>

                  <CardDescription>
                    {receita.ingredients.map((ingrediente, i) => (
                      <p key={i}>{ingrediente}</p>
                    ))}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {receita.steps.map((passo, i) => (
                    <p key={i}>{passo}</p>
                  ))}
                </CardContent>

                <CardFooter>
                  <CardDescription className="w-full">
                    {receita.description}
                  </CardDescription>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      )}
    </>
  )
}