import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Apple, Droplet } from 'lucide-react';


const MealPlan = () => {
    const [currentDay, setCurrentDay] = useState(0);

    const weekPlan = [
        {
            day: "Monday",
            subtitle: "Lighter Day",
            lunch: {
                location: "Dining Hall 1",
                meal: "Salad bar - mixed greens, grilled chicken (from burger place), cherry tomatoes, cucumbers, light vinaigrette",
                drink: "Water"
            },
            dinner: {
                location: "Dining Hall 2",
                meal: "Stir fry with lots of vegetables, lean protein, minimal oil. Brown rice (small portion)",
                drink: "Water"
            }
        },
        {
            day: "Tuesday",
            subtitle: "",
            lunch: {
                location: "Dining Hall 1",
                meal: "Grilled chicken sandwich on whole wheat bread, side of fruit",
                drink: "Water"
            },
            dinner: {
                location: "Dining Hall 2",
                meal: "Fake Chipotle bowl: Brown rice (1/2 cup), black beans, lots of lettuce, pico de gallo, grilled steak or chicken, skip cheese or go light",
                drink: "Water"
            }
        },
        {
            day: "Wednesday",
            subtitle: "",
            lunch: {
                location: "Dining Hall 1",
                meal: "Large salad with turkey, various veggies, balsamic vinaigrette",
                drink: "Water"
            },
            dinner: {
                location: "Chicken Place",
                meal: "Grilled chicken sandwich (skip or go light on sauce), mashed potatoes, fruit for dessert",
                drink: "Unsweetened tea"
            }
        },
        {
            day: "Thursday",
            subtitle: "",
            lunch: {
                location: "Dining Hall 2",
                meal: "Sandwich place option (turkey or lean meat), add veggies, whole grain if available. Side of fruit",
                drink: "Water"
            },
            dinner: {
                location: "Dining Hall 1",
                meal: "Asian: Stir fry vegetables with chicken, small portion of white rice (about 1/2-3/4 cup)",
                drink: "Water"
            }
        },
        {
            day: "Friday",
            subtitle: "",
            lunch: {
                location: "Dining Hall 2",
                meal: "Stir fry with heavy vegetables, chicken or shrimp, light sauce",
                drink: "Water"
            },
            dinner: {
                location: "Dining Hall 1",
                meal: "Grilled chicken from burger place, macaroni salad (small portion), side salad",
                drink: "Water"
            }
        },
        {
            day: "Saturday",
            subtitle: "",
            lunch: {
                location: "Dining Hall 1",
                meal: "Pasta with marinara (not Alfredo), add grilled chicken, side salad",
                drink: "Water"
            },
            dinner: {
                location: "Dining Hall 2",
                meal: "Meat place: grilled steak with vegetables, brown rice (small portion)",
                drink: "Water"
            }
        },
        {
            day: "Sunday",
            subtitle: "",
            lunch: {
                location: "Dining Hall 2",
                meal: "Chipotle bowl: brown rice, beans, extra lettuce and veggies, salsa, small amount of cheese",
                drink: "Water"
            },
            dinner: {
                location: "Chicken Place",
                meal: "Chicken tenders (3-4 pieces), fruit, skip or minimize the Texas toast",
                drink: "Diet soda or water"
            }
        }
    ];

    const tips = [
        "Load up on vegetables at every opportunity",
        "Choose grilled over fried",
        "Watch portion sizes on rice, pasta, and bread",
        "Marinara > Alfredo always",
        "Brown rice > white rice when available",
        "Skip or minimize cheese, creamy dressings, and heavy sauces",
        "Fill half your plate with vegetables when possible",
        "Feel free to add fruit to any meal!"
    ];

    const nextDay = () => {
        setCurrentDay((prev) => (prev + 1) % weekPlan.length);
    };

    const prevDay = () => {
        setCurrentDay((prev) => (prev - 1 + weekPlan.length) % weekPlan.length);
    };

    const today = weekPlan[currentDay];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 pt-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">College Meal Plan</h1>
                    <p className="text-gray-600">Your weekly weight-loss focused dining guide</p>
                </div>

                {/* Day Navigator */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <button
                            onClick={prevDay}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Previous day"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>

                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-800">{today.day}</h2>
                            {today.subtitle && (
                                <p className="text-sm text-blue-600 font-medium mt-1">{today.subtitle}</p>
                            )}
                        </div>

                        <button
                            onClick={nextDay}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Next day"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Day indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                        {weekPlan.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentDay(index)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    index === currentDay ? 'bg-blue-600 w-8' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to ${weekPlan[index].day}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Lunch */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="bg-yellow-100 p-2 rounded-lg">
                            <span className="text-2xl">🌤️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Lunch</h3>
                    </div>
                    <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {today.lunch.location}
            </span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-3">{today.lunch.meal}</p>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Droplet className="w-4 h-4" />
                        <span className="text-sm">{today.lunch.drink}</span>
                    </div>
                </div>

                {/* Dinner */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="bg-orange-100 p-2 rounded-lg">
                            <span className="text-2xl">🌙</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Dinner</h3>
                    </div>
                    <div className="mb-2">
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {today.dinner.location}
            </span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-3">{today.dinner.meal}</p>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Droplet className="w-4 h-4" />
                        <span className="text-sm">{today.dinner.drink}</span>
                    </div>
                </div>

                {/* Fruit Reminder */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg shadow-lg p-4 mb-4 border-2 border-pink-200">
                    <div className="flex items-center gap-2">
                        <Apple className="w-5 h-5 text-pink-600" />
                        <p className="text-gray-700 font-medium">
                            Remember: Feel free to add fruit to any meal!
                        </p>
                    </div>
                </div>

                {/* Tips */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Weekly Tips</h3>
                    <ul className="space-y-2">
                        {tips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-green-600 mt-1">✓</span>
                                <span className="text-gray-700">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 pb-8">
                    <p className="text-gray-600 text-sm">Good luck with your weight loss goals! 💪</p>
                </div>
            </div>
        </div>
    );
};

export default MealPlan;