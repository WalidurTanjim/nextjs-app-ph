"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MealSearchInput from './components/MealSearchInput';

const MealsPage = () => {
    const meals = [];
    // fetch all meals
    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            return data?.meals;
        }catch(err){
            console.error(err);
            return [];
        }
    }

    return (
        <div className='meals'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className="text-center text-2xl text-slate-700 font-medium">All Meals</h1>

                {/* search functionality */}
                <MealSearchInput />

                <div className='mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        meals?.map(meal => {
                            return (
                                <Link key={meal?.idMeal} href={`/meals/${meal?.idMeal}`}>
                                    <div className='border border-gray-300 rounded p-2 hover:shadow-md cursor-pointer'>
                                        <p><span className='font-medium text-slate-700'>Id:</span> {meal?.idMeal}</p>
                                        <p><span className='font-medium text-slate-700'>Name:</span> {meal?.strMeal}</p>
                                        <p><span className='font-medium text-slate-700'>Description:</span> {meal?.strInstructions?.slice(0, 150)}...</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default MealsPage;