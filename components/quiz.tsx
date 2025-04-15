"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2, ChevronLeft, ChevronRight, RotateCcw, Flag } from "lucide-react"
import { questions } from "@/data/questions"

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null))
  const [quizCompleted, setQuizCompleted] = useState(false)
  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleAnswerSelect = (value: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(value)
    }
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return

    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestionIndex] = selectedAnswer
    setUserAnswers(newUserAnswers)

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }

    setIsAnswerSubmitted(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedAnswer(userAnswers[currentQuestionIndex + 1])
      setIsAnswerSubmitted(userAnswers[currentQuestionIndex + 1] !== null)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
      setSelectedAnswer(userAnswers[currentQuestionIndex - 1])
      setIsAnswerSubmitted(userAnswers[currentQuestionIndex - 1] !== null)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsAnswerSubmitted(false)
    setScore(0)
    setUserAnswers(Array(questions.length).fill(null))
    setQuizCompleted(false)
  }

  const endQuiz = () => {
    setQuizCompleted(true)
  }

  // Calculate statistics for the summary screen
  const calculateStats = () => {
    const answeredQuestions = userAnswers.filter((answer) => answer !== null).length
    const correctAnswers = score
    const incorrectAnswers = answeredQuestions - correctAnswers
    const correctPercentage = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0
    const incorrectPercentage = answeredQuestions > 0 ? Math.round((incorrectAnswers / answeredQuestions) * 100) : 0

    return {
      answeredQuestions,
      correctAnswers,
      incorrectAnswers,
      correctPercentage,
      incorrectPercentage,
    }
  }

  if (quizCompleted) {
    const stats = calculateStats()

    return (
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle className="text-center">¡Test Completado!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-2xl font-bold">
              Tu Puntuación: {stats.correctAnswers} / {stats.answeredQuestions}
            </p>
            <p className="text-lg mt-2">{stats.correctPercentage}% Correctas</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 text-center">
              <p className="text-lg font-medium text-green-700 dark:text-green-400">Respuestas Correctas</p>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400">{stats.correctAnswers}</p>
              <p className="text-sm text-green-600 dark:text-green-500">{stats.correctPercentage}%</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 text-center">
              <p className="text-lg font-medium text-red-700 dark:text-red-400">Respuestas Incorrectas</p>
              <p className="text-2xl font-bold text-red-700 dark:text-red-400">{stats.incorrectAnswers}</p>
              <p className="text-sm text-red-600 dark:text-red-500">{stats.incorrectPercentage}%</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-medium">Resumen de Preguntas:</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto p-2">
              {questions.map((question, index) => {
                // Only show questions that were answered
                if (userAnswers[index] === null) return null

                return (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      userAnswers[index] === question.correctAnswer
                        ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                        : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {userAnswers[index] === question.correctAnswer ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium">
                          {index + 1}. {question.question}
                        </p>
                        <p className="mt-1 text-sm">
                          Tu respuesta:{" "}
                          {userAnswers[index]
                            ? question.options.find((opt) => opt.value === userAnswers[index])?.label || "Ninguna"
                            : "Ninguna"}
                        </p>
                        {userAnswers[index] !== question.correctAnswer && (
                          <p className="mt-1 text-sm font-medium text-green-600 dark:text-green-400">
                            Respuesta correcta:{" "}
                            {question.options.find((opt) => opt.value === question.correctAnswer)?.label}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={resetQuiz} className="w-full">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reiniciar Test
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm font-medium">
          Pregunta {currentQuestionIndex + 1} de {questions.length}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={endQuiz}>
            <Flag className="mr-2 h-4 w-4" />
            Terminar Test
          </Button>
          <Button variant="outline" size="sm" onClick={resetQuiz}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reiniciar Test
          </Button>
        </div>
      </div>
      <Progress value={progress} className="mb-6" />

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedAnswer || ""} className="space-y-3">
            {currentQuestion.options.map((option) => (
              <div
                key={option.value}
                className={`flex items-center space-x-2 rounded-md border p-3 ${
                  isAnswerSubmitted && option.value === currentQuestion.correctAnswer
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : isAnswerSubmitted && option.value === selectedAnswer
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-gray-200 dark:border-gray-700"
                }`}
                onClick={() => handleAnswerSelect(option.value)}
              >
                <RadioGroupItem value={option.value} id={option.value} disabled={isAnswerSubmitted} />
                <Label htmlFor={option.value} className="flex-grow cursor-pointer">
                  {option.label}
                </Label>
                {isAnswerSubmitted && option.value === currentQuestion.correctAnswer && (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                )}
                {isAnswerSubmitted &&
                  option.value === selectedAnswer &&
                  option.value !== currentQuestion.correctAnswer && <AlertCircle className="h-5 w-5 text-red-500" />}
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
          </Button>

          <div className="flex gap-2">
            {!isAnswerSubmitted ? (
              <Button onClick={handleSubmitAnswer} disabled={!selectedAnswer}>
                Enviar Respuesta
              </Button>
            ) : (
              <Button onClick={handleNextQuestion}>
                {currentQuestionIndex < questions.length - 1 ? (
                  <>
                    Siguiente <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  "Finalizar Test"
                )}
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>

      <div className="mt-6">
        <div className="grid grid-cols-10 gap-2">
          {questions.map((question, index) => {
            // Determine button styling based on answer correctness
            let buttonStyle = ""
            let variant = "ghost"

            if (index === currentQuestionIndex) {
              variant = "default"
            } else if (userAnswers[index] !== null) {
              variant = "outline"
              if (userAnswers[index] === question.correctAnswer) {
                buttonStyle =
                  "bg-green-100 hover:bg-green-200 text-green-700 border-green-500 dark:bg-green-900/30 dark:hover:bg-green-900/40 dark:text-green-400 dark:border-green-700"
              } else {
                buttonStyle =
                  "bg-red-100 hover:bg-red-200 text-red-700 border-red-500 dark:bg-red-900/30 dark:hover:bg-red-900/40 dark:text-red-400 dark:border-red-700"
              }
            }

            return (
              <Button
                key={index}
                variant={variant}
                className={`h-10 w-10 p-0 ${buttonStyle}`}
                onClick={() => {
                  setCurrentQuestionIndex(index)
                  setSelectedAnswer(userAnswers[index])
                  setIsAnswerSubmitted(userAnswers[index] !== null)
                }}
              >
                {index + 1}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
