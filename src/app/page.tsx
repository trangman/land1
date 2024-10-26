import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Menu, BookOpen, Shield, Coins, Brain, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function CryptoBookLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-center">
          <div className="flex items-center justify-between w-full max-w-6xl">
            <div className="mr-4 hidden md:flex">
              <Link className="mr-6 flex items-center space-x-2" href="/">
                <BookOpen className="h-6 w-6" />
                <span className="hidden font-bold sm:inline-block">Crypto for Beginners</span>
              </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href="#features">What You&apos;ll Learn</Link>
                <Link href="#why-different">Why This Book</Link>
                <Link href="#testimonials">Testimonials</Link>
                <Link href="#pricing">Get the Book</Link>
                <Link href="#faq">FAQ</Link>
              </nav>
            </div>
            <Button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
            <div className="flex flex-1 items-center justify-end space-x-2 md:flex-none">
              <Button asChild>
                <Link href="#pricing">Buy Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-700 to-indigo-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                    Unlock the World of Cryptocurrency
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                    Your Ultimate Guide to Crypto Investing and Security
                  </p>
                </div>
                <p className="text-xl text-gray-200 italic">
                  Cryptocurrency for Beginners: Understanding the Basics and Keeping Your Investments Safe
                </p>
                <div className="space-x-4">
                  <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">Get Started</Button>
                  <Button size="lg" variant="outline" className="text-purple-700 border-white hover:bg-white hover:text-purple-800">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What You&apos;ll Learn</h2>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Coins, title: "The Basics of Cryptocurrency", description: "Learn what cryptocurrencies are, how they work, and why they matter in today's financial landscape." },
                  { icon: Brain, title: "Blockchain Technology", description: "Explore the revolutionary technology behind cryptocurrencies in simple terms." },
                  { icon: Shield, title: "Security Tips", description: "Discover effective security practices to keep your digital assets safe." },
                  { icon: CheckCircle, title: "Investment Strategies", description: "Learn essential strategies for safely investing in crypto and managing risks." },
                  { icon: BookOpen, title: "Buying and Selling", description: "Walk through the process of buying, selling, and storing cryptocurrency safely." },
                  { icon: MessageCircle, title: "Advanced Topics", description: "Introduction to advanced concepts like NFTs and DeFi in a beginner-friendly way." },
                ].map((feature, index) => (
                  <Card key={index}>
                    <CardHeader className="text-center">
                      <feature.icon className="h-10 w-10 mb-2 text-purple-600 mx-auto" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p>{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="why-different" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why This Book Is Different</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {[
                  { title: "Clear, Easy-to-Understand Explanations", description: "We simplify complex topics like blockchain, mining, and smart contracts so anyone can understand, even if you have no prior experience." },
                  { title: "Real-World Examples", description: "Learn through relatable examples that show how ordinary people are using cryptocurrencies for payments, savings, and investments." },
                  { title: "Step-by-Step Guides", description: "From setting up your first crypto wallet to executing your first trade, we offer detailed, actionable steps that make the learning curve easier." },
                  { title: "Expert Security Advice", description: "Crypto can be risky—but with the right knowledge, you can protect yourself. This book offers trusted security tips to safeguard your assets." },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Readers Are Saying</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {[
                  { name: "Sarah M.", role: "Beginner Crypto Investor", content: "The perfect introduction to crypto! I had no idea where to start, but this book walked me through everything clearly and simply. Highly recommend for anyone new to cryptocurrency." },
                  { name: "John D.", role: "Entrepreneur", content: "I&apos;ve always wanted to get into cryptocurrency, but I was nervous about the security risks. This book not only explained the risks but gave me confidence to make my first investment." },
                ].map((testimonial, index) => (
                  <Card key={index}>
                    <CardHeader className="text-center">
                      <CardTitle>{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p>&quot;{testimonial.content}&quot;</p>
                      <div className="mt-4 flex items-center justify-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Get Your Copy Today</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "eBook", price: "$19.99", features: ["Instant download", "Read on any device", "Free updates"] },
                  { name: "Paperback", price: "$29.99", features: ["Physical book", "Free shipping", "Highlight and take notes"] },
                  { name: "Bundle", price: "$39.99", features: ["eBook + Paperback", "Best value", "Free Crypto Chatbot access"] },
                ].map((plan, index) => (
                  <Card key={index} className={index === 2 ? "border-purple-500" : ""}>
                    <CardHeader className="text-center">
                      <CardTitle>{plan.name}</CardTitle>
                      <p className="text-3xl font-bold">{plan.price}</p>
                      {index === 2 && <Badge className="absolute top-4 right-4 bg-purple-500">Best Value</Badge>}
                    </CardHeader>
                    <CardContent className="text-center">
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center justify-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Buy Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {[
                  { question: "Do I need any prior knowledge to read this book?", answer: "No, this book is written for beginners. It explains concepts in simple terms, so no previous experience is required." },
                  { question: "Is cryptocurrency safe to invest in?", answer: "Like any investment, cryptocurrency has risks, but with the right knowledge, you can manage these risks effectively. This book offers detailed advice on how to keep your investments secure." },
                  { question: "Will this book cover advanced topics like NFTs or DeFi?", answer: "Yes, we introduce advanced topics in a beginner-friendly way, so you can explore exciting areas like decentralized finance (DeFi) and non-fungible tokens (NFTs)." },
                  { question: "How can I store my cryptocurrency safely?", answer: "We explain the differences between hot and cold wallets, and give you actionable steps to secure your crypto with best practices in safety." },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{item.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-700">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col items-center space-y-4 text-center text-white">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Crypto Journey?</h2>
                  <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                    Don&apos;t miss out on the opportunity to be part of the financial revolution!
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input className="max-w-lg flex-1 bg-white text-gray-900" placeholder="Enter your email" type="email" />
                    <Button type="submit" className="bg-white text-purple-700 hover:bg-gray-100">Get 10% Off</Button>
                  </form>
                  <p className="text-xs text-gray-300">
                    By signing up, you agree to our{" "}
                    <Link href="/terms" className="underline underline-offset-2">
                      Terms & Conditions
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Crypto for Beginners. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
