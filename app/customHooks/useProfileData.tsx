import { useEffect, useState } from "react";
import { getExpoStorage } from "../services/expo-storage";
import { apiGetProfile } from "../services/BEApis/profile";

// Custom hook to fetch and store profile data
const useProfileData = () => {
  const [profileData, setProfileData] = useState<any>();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const storedEmail = await getExpoStorage("localEmail");
        const extractedData = storedEmail?.replace(/^"(.*)"$/, "$1");

        if (extractedData) {
          // const res = await apiGetProfile(extractedData);
          // setProfileData(res?.data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();

    // Cleanup function if needed
    return () => {
      // Cleanup code if needed
    };
  }, []); // Empty dependency array to run effect only once

  return profileData;
};

export default useProfileData;
