"use client";

import { useState, useEffect } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { ChevronLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface QuestionnaireData {
  businessSize: string;
  businessStage: string;
  helpType: string;
  goal: string;
  timeframe: string;
}

export default function ServiceQuestionnaire() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<QuestionnaireData>({
    businessSize: "",
    businessStage: "",
    helpType: "",
    goal: "",
    timeframe: "",
  });

  const totalSteps = 5;

  useEffect(() => {
    if (currentStep === 0) {
      const timer = setTimeout(() => {
        setCurrentStep(1);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleNext = (value: string, field: keyof QuestionnaireData) => {
    const newData = { ...data, [field]: value };
    setData(newData);

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      const searchParams = new URLSearchParams(newData);
      router.push(`/services?${searchParams.toString()}`);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 1) {
      setCurrentStep(0);
    } else {
      router.back();
    }
  };

  const handleSkip = () => {
    router.push("/services");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className='text-center'>
            <h1 className='text-3xl md:text-4xl text-[#3B3B3B] mb-4'>
              To help show only service related, we need to ask you few
              questions
            </h1>
            <div className='mt-8'>
              <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500'></div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className='text-center'>
            <h2 className='text-2xl md:text-3xl text-[#3B3B3B] mb-8'>
              What's your business size?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto'>
              {["1-10", "11-50", "51-200", "200+"].map((size) => (
                <Button
                  key={size}
                  variant='outline'
                  className='h-16 text-lg hover:bg-orange-50 hover:border-orange-300 transition-all duration-200'
                  onClick={() => handleNext(size, "businessSize")}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className='text-center'>
            <h2 className='text-2xl md:text-3xl text-[#3B3B3B] mb-8'>
              What stage is your business in?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto'>
              {["Less than 1 Year", "1-2 Years", "3-5 Years"].map((stage) => (
                <Button
                  key={stage}
                  variant='outline'
                  className='h-16 text-lg hover:bg-orange-50 hover:border-orange-300 transition-all duration-200'
                  onClick={() => handleNext(stage, "businessStage")}
                >
                  {stage}
                </Button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className='text-center'>
            <h2 className='text-2xl md:text-3xl text-[#3B3B3B] mb-8'>
              What best describes the type of help do you need from us?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto'>
              {["Create Something New", "Assess & Improve Existing Thing"].map(
                (type) => (
                  <Button
                    key={type}
                    variant='outline'
                    className='h-16 text-lg hover:bg-orange-50 hover:border-orange-300 transition-all duration-200'
                    onClick={() => handleNext(type, "helpType")}
                  >
                    {type}
                  </Button>
                )
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className='text-center'>
            <h2 className='text-2xl md:text-3xl text-[#3B3B3B] mb-8'>
              What's best describes your goal?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto'>
              {[
                "Start My Business",
                "Promote My Business",
                "Launch My Website",
                "Optimize My Performance",
                "Maintain My Brand",
                "Grow On Social Media",
                "Sell Online",
              ].map((goal) => (
                <Button
                  key={goal}
                  variant='outline'
                  className='h-16 text-lg hover:bg-orange-50 hover:border-orange-300 transition-all duration-200'
                  onClick={() => handleNext(goal, "goal")}
                >
                  {goal}
                </Button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className='text-center'>
            <h2 className='text-2xl md:text-3xl text-[#3B3B3B] mb-8'>
              How soon do you expect to for your work to get done?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto'>
              {["3-5 Hours", "6-10 Hours", "11-15 Hours", "15+ Hours"].map(
                (time) => (
                  <Button
                    key={time}
                    variant='outline'
                    className='h-16 text-lg hover:bg-orange-50 hover:border-orange-300 transition-all duration-200'
                    onClick={() => handleNext(time, "timeframe")}
                  >
                    {time}
                  </Button>
                )
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col pt-20'>
      {/* Header */}
      <div className='bg-white shadow-sm'>
        <div className='max-w-4xl mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            {currentStep > 0 && (
              <Button
                variant='ghost'
                size='sm'
                onClick={handleBack}
                className='flex items-center gap-2 text-gray-600 hover:text-[#3B3B3B]'
              >
                <ChevronLeft className='w-4 h-4' />
                Back
              </Button>
            )}
          </div>

          <div className='text-sm font-medium text-gray-600'>
            {currentStep > 0 ? `${currentStep}/${totalSteps}` : ""}
          </div>

          {currentStep > 0 && (
            <Button
              variant='ghost'
              size='sm'
              onClick={handleSkip}
              className='text-orange-600 hover:text-orange-700 hover:bg-orange-50'
            >
              Skip All
              <X className='w-4 h-4 ml-1' />
            </Button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      {currentStep > 0 && (
        <div className='bg-white border-b'>
          <div className='max-w-4xl mx-auto px-6'>
            <div className='w-full bg-gray-200 h-1'>
              <div
                className='bg-orange-500 h-1 transition-all duration-300 ease-out'
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className='flex-1 flex items-center justify-center px-6 py-12'>
        <div className='w-full max-w-4xl'>{renderStep()}</div>
      </div>
    </div>
  );
}
