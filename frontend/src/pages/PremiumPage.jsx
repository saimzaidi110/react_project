import React from 'react'
import NavbarComponent from './NavbarComponent'

export default function PremiumPage() {
  return (
    <div>
           <NavbarComponent/>
      <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Choose a plan</h2>
            <p class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="max-w-sm mx-auto mt-8 sm:mt-16">
            <div class="space-y-3">
                <div class="overflow-hidden transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-50">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div>
                                <input type="checkbox" name="plan" id="monthlyPlan" class="w-5 h-5 text-blue-600 border-gray-500 rounded-full" />
                            </div>
                            <label for="monthlyPlan" class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">$29/month</p>
                                <p class="text-sm text-gray-600">Simple monthly billing</p>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="overflow-hidden transition-all duration-200 bg-white border-2 border-blue-600 rounded-md hover:bg-gray-50">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div>
                                <input type="checkbox" name="plan" id="yearlyPlan" class="w-5 h-5 text-blue-600 border-gray-500 rounded-full" />
                            </div>
                            <label for="yearlyPlan" class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">$19/month</p>
                                <p class="text-sm text-gray-600">$228 billed in a year</p>
                            </label>
                            <span class="inline-block px-4 py-2 text-sm font-semibold text-green-600 bg-green-100 border border-green-600 rounded-full"> Save 20% </span>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" title="" class="inline-flex items-center justify-center w-full px-12 py-4 mt-6 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80" role="button"> Start Building Website </a>

            <p class="mt-5 text-base text-center text-gray-600">Confused? <a href="#" title="" class="font-medium text-black hover:underline">Check all features</a></p>
        </div>
    </div>
</section>

    </div>
  )
}
