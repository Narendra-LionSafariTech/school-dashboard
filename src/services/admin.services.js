import api from "./apiUtility";

export const getExamDetails= async () => {
    try {
        const response = await api.get("/admin/exam-details");
        return response;

    } catch (error) {
        throw error
    }

}

export const updateCandidateStatus= async (payload) => {
    try {
        const response = await api.post("/admin-school/onboard-new-teacher", payload,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
        );
        return response;
    } catch (error) {
        throw error
    }
}