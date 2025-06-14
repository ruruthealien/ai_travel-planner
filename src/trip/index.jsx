import React, { useState, useEffect } from "react";
import GeoapifyAutocomplete from "@/components/ui/custom/GeoapifyAutocomplete";
import { Input } from "@/components/ui/input";
import { SelectBudgetList } from "@/constants/options";
import { SelectTravelsList } from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

function CreateTrip() {
  const handlePlaceSelect = (place) => {
    // Handle the selected place here
    const destinationData = {
      label: place?.properties?.formatted || "",
      value: place?.properties?.name || "",
      place_id: place?.properties?.place_id || "",
      city: place?.properties?.city || "",
      country: place?.properties?.country || "",
      lon: place?.properties?.lon || "",
      lat: place?.properties?.lat || "",
    };

    console.log("Selected destination:", destinationData);

    handleInputChange("destination", destinationData);
  };

  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    // Update the formData state with the new value for the specified field
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Log the formData whenever it changes
  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);


  // Function to handle trip generation
  const OnGeneratetrip = () => {
    if (formData?.noOfDays < 1) {
      toast("Number of days must be at least 1");
      return;
    }
    if (!formData?.destination) {
      toast("Please select a destination");
      return;
    }
    if (!formData?.budget) {
      toast("Please select a budget");        
      return;
    }
    if (!formData?.people) {
      toast("Please select your travel partner");
      return;
    }
    
    // Validate the form data before generating the trip
    if (formData?.noOfDays > 30) {
      toast("Number of days cannot exceed 30");
      return;
    }
    console.log("Generating trip with data:", formData);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mx-30 mt-10 shadow-xl rounded-lg bg-gray-50 py-10">
      {/* Heading part */}
      <h2 className="font-bold text-3xl">
        {" "}
        Tell us your travel preferences🏕️🌲{" "}
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        {" "}
        Provide a few essential details, and our advanced trip planner will
        generate a customized itinerary designed to align <br></br> with your
        preferences, schedule, and travel objectives.{" "}
      </p>

      {/* Form part */}
      <div className="mt-20 flex flex-col gap-9 ">
        {/* travel type */}
        <div>
          <h2 className="text-xl my-3 font-medium">
            {" "}
            🛫 What is your destination of choice?{" "}
          </h2>
          <div>
            <GeoapifyAutocomplete onSelect={handlePlaceSelect} />
          </div>
        </div>

        {/* no of days */}
        <div>
          <h2 className="text-xl my-3 font-medium">
            {" "}
            📅 How many days are you planning your trip?{" "}
          </h2>
          <Input
            placeholder={"Ex.3"}
            type="number"
            className="w-150 p-2 border rounded"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>

      {/* budget for travel */}
      <div>
        <h2 className="text-xl my-3 mt-15 font-medium gap-5">
          {" "}
          💵 What is your Budget?{" "}
        </h2>
        <div className="flex flex-wrap gap-5 justify">
          {SelectBudgetList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-5 mx-3 mt-2 w-75 border rounded-2xl cursor-pointer text-center
            transition-transform transform hover:scale-105
            ${
              formData.budget === item.title
                ? "bg-purple-300 shadow-lg border-2"
                : "bg-purple-100 hover:shadow-lg"
            }`}
            >
              {/* Conditional class for selected item */}
              <h2 className="text-5xl">{item.icon}</h2>
              <h2 className="font-bold text-lg mt-3">{item.title}</h2>
              <h2 className="text-sm text-gray-600">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* traveling partner*/}
      <div>
        <h2 className="text-xl my-3 mt-15 font-medium">
          {" "}
          👥 Who do you plan on traveling on your next adventure?{" "}
        </h2>
        <div className="flex flex-wrap gap-5">
          {SelectTravelsList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("people", item.people)}
              className={`p-5 w-75 mx-3 mt-2 border rounded-2xl cursor-pointer text-center
            transition-transform transform hover:scale-105
            ${
              formData.people === item.people
                ? "bg-purple-300 shadow-lg border-2"
                : "bg-purple-100 hover:shadow-lg"
            }`}
            >
              <h2 className="text-5xl">{item.icon}</h2>
              <h2 className="font-bold text-lg mt-3">{item.title}</h2>
              <h2 className="text-sm text-gray-600">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div>{/* Button */}</div>
      <div className="flex justify-end my-4 mt-5">
        <Button onClick={OnGeneratetrip} className="bg-gradient-to-r from-green-600 to-lime-400 hover:scale-105 active:scale-95 shadow-md hover:shadow-xl active:shadow-sm text-black font-semibold border-b px-5 py-5 rounded-lg transition-all duration-300 ease-in-out">
          {" "}
          Generate Trip Plan
        </Button>
      </div>
    </div>
  );
}

export default CreateTrip;
