import PageLayout from "@/components/common/PageLayout";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <PageLayout
      title="Dashboard"
      description="Overview of your application"
      actions={<Button>Add New</Button>}
    >
      <div>Page content here</div>
    </PageLayout>
  );
}