"use client"

import { useState } from "react";
import { Star, BadgeAlert } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { ReviewsPageClient } from "./ReviewsPageClient"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ToggleSection({ reviews, recipes }) {
  const [showReviews, setShowReviews] = useState(false)

  return (
    <>
      <div className="justify-center align-middle flex">
        <div className='grid grid-cols-2 min-h-screen w-300 flex-col align-middle items-baseline px-4 py-10 font-sans'>
          <div className="justify-center align-middle">
            <Toggle
              aria-label="Toggle bookmark"
              size="sm"
              variant="outline"
              pressed={showReviews}
              onPressedChange={setShowReviews}
              className="border border-amber-950 bg-amber-800 text-white data-[state=on]:bg-amber-200 data-[state=on]:text-gray-700"
            >
              <Star className="group-data-[state=on]/toggle:fill-foreground" />
              Reviews
            </Toggle>

            {showReviews ? (
              <div className='grid grid-cols-2 w-300 items-baseline px-4 py-10'>
                {reviews.map((review) => {
                  return (
                    <Card size="sm" className="mx-auto w-full max-w-sm my-4 bg-amber-200 border border-amber-950" key={review.id}>
                      <CardHeader>
                        <CardTitle className="font-extrabold text-lg">{review.author}</CardTitle>

                        <CardDescription className="flex align-middle gap-1.5 text-gray-800">
                          <Star />Avaliação: {review.rating}
                        </CardDescription>
                      </CardHeader>

                      <CardFooter className="bg-amber-800">
                        <CardDescription className="w-full text-white">
                          {review.comment}
                        </CardDescription>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            ) : (

              <div className='grid grid-cols-2 w-300 items-baseline px-4 py-10'>
                {recipes.map((receita) => {
                  return (
                    <Card size="sm" className="mx-auto w-full max-w-sm my-4 bg-amber-200 border border-amber-950" key={receita.id}>
                      <CardHeader>
                        <div className="flex justify-between">
                          <div>
                            <CardTitle className="font-extrabold text-lg">{receita.title}</CardTitle>
                            <CardDescription className="text-gray-800">
                              {receita.prepTime} minuto
                            </CardDescription>

                            <CardDescription className="text-gray-800">
                              {receita.ingredients.map((ingrediente, i) => (
                                <p key={i}>{ingrediente}</p>
                              ))}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col">
                            <Dialog className="" >
                              <form className="self-end">
                                <DialogTrigger asChild>
                                  <BadgeAlert className=""/>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-sm">
                                  <DialogHeader>
                                    <DialogTitle>Editar receita</DialogTitle>
                                    <DialogDescription>
                                      Faça atualizações nesta receita.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <FieldGroup>
                                    <Field>
                                      <Label htmlFor="name-1">Receita</Label>
                                      <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                                    </Field>
                                    <Field>
                                      <Label htmlFor="username-1">Descrição</Label>
                                      <Input id="username-1" name="username" defaultValue="@peduarte" />
                                    </Field>
                                    <Field>
                                      <Label htmlFor="username-1">Ingredientes</Label>
                                      <Input id="username-1" name="username" defaultValue="@peduarte" />
                                    </Field>
                                    <Field>
                                      <Label htmlFor="username-1">Tempo de preparo</Label>
                                      <Input id="username-1" name="username" defaultValue="@peduarte" />
                                    </Field>
                                  </FieldGroup>
                                  <DialogFooter>
                                    <DialogClose asChild>
                                      <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit">Save changes</Button>
                                  </DialogFooter>
                                </DialogContent>
                              </form>
                            </Dialog>
                            <img
                              src="https://plus.unsplash.com/premium_vector-1721296174578-d245a4d6f331?w=500&auto=format&fit=crop&q=60"
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="font-bold">
                        {receita.steps.map((passo, i) => (
                          <p key={i}>{passo}</p>
                        ))}
                      </CardContent>

                      <CardFooter className="bg-amber-800">
                        <CardDescription className="w-full text-white ">
                          {receita.description}
                        </CardDescription>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>

            )}

          </div>
        </div>
      </div>
    </>
  )
}