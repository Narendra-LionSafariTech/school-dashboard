const fetchExamData = async (examName, shift) => {
    try {
      const response = await getStudentInfo(examName, shift);
      const { centerSummaries } = response.data;

      const transformedRows = centerSummaries.map((center) => ({
        centerCode: center.centerCode,
        totalStudents: center.totalStudents,
        presentStudents: center.presentStudents,
        presentPercentage: center.presentPercentage,
      }));

      const extractCenter=transformedRows.map(item=>(
        item.centerCode
      ))
      setRows(transformedRows);
      setFilteredRows(transformedRows);
      setCenterCode(extractCenter)
    } catch (error) {
      console.error("Error fetching exam data:", error);
    } finally {
      setLoading(false);
    }
  };