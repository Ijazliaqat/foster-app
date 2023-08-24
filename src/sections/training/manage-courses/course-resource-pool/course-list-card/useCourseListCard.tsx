import { useRouter } from "next/router"

export const useCourseListCard = () => {
  const courseListPath = '/training/manage-courses/course-resource-pool/category/list/list-detail';
  const searchCoursePath = '/training/manage-courses/search-course/course-detail';
  const archiveCoursePath = '/training/manage-courses/archive-course/course-detail';
  const approvalPath = '/training/manage-courses/pending-for-approval/course-detail';
  const router = useRouter();
  const handleCardClick = (name?: string) => {
    switch (name) {
      case 'searchCourse':
        router.push({ pathname: searchCoursePath, });
        break;
      case 'courseList':
        router.push({ pathname: courseListPath });
        break;
      case 'archiveCourse':
        router.push({ pathname: archiveCoursePath });
        break;
      case 'pendingForApproval':
        router.push({ pathname: approvalPath, query: { name } });
        break;
      default:
        break;
    }
  };

  return {
    handleCardClick,
  }
}