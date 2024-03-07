import BillboardForm from "@/app/(dashboard)/[storeId]/(routes)/billboards/[billboardId]/_components/BillboardForm";
import { db } from "@/lib/database/prisma";

const BilboardCreattionPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await db.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-8 p-8 pt-6">
        <BillboardForm billboard={billboard} />
      </div>
    </div>
  );
};

export default BilboardCreattionPage;
