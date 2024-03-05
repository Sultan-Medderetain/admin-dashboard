import { db } from "@/lib/database/prisma";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({
  params: { storeId },
}) => {
  const store = await db.store.findUnique({
    where: {
      id: storeId,
    },
  });

  return <div>{store?.name}</div>;
};

export default DashboardPage;
