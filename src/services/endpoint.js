import { baseUrl } from "../utils/baseUrl"
export const endpoint={
    admin_login:`${baseUrl}/api/users/authenticate`,
    candidate_login:`${baseUrl}/api/users/authenticate`,
    examCenters:"/admin/exam-centers"
}