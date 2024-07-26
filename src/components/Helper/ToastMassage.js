import { toast } from "react-toastify";



export default function ToastMassage(massage) {
    if (massage.success) {
      toast.success(massage.massage)
    }
    else {
        toast.error(massage.massage)
    }
}
