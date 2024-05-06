import axios from 'axios';
import { toast } from "sonner"

export const postDataQuery = async (url, data) => {

    try {
        const response = await axios.post(url, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        const { message } = response.data;
      
        if (response.status === 200) {
          toast.success(message);
          return response.data;
        } else {
          toast.success(message);
          return
        }
      } catch (error) {
        if (error.response && error.response.status === 406) {
          toast.warning("Sorry, but you do not seem to meet the desired criteria set by this school.");
          return
        } else {
          toast.error("Ooops, we ran into something. You could try checking your internet connection to help fix this.");
          console.error('Post request failed', error);
          throw error;
        }
      }
    }