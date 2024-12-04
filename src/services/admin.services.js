import api from "./apiUtility";

export const getExamDetails= async () => {
    try {
        const response = await api.get("/admin/exam-details");
        return response;

    } catch (error) {
        throw error
    }

}


export const getStudentInfo= async (examName,shift) => {
    try {
        const response = await api.get(`/api/enrollment-summary?examName=${examName}&shift=${shift}`);
        return response;

    } catch (error) {
        throw error
    }
}

export const getStudentCount= async (examName,shift) => {
    try {
        const response = await api.get(`/student-counts/${examName}/${shift}`);
        return response;

    } catch (error) {
        throw error
    }
}

export const getStudentDetails= async () => {
    try {
        const response = await api.get(`/students-by-roll-numbers`);
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