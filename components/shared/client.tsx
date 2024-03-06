"use client";

import { Plus } from "lucide-react";
import Heading from "../global/Heading";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useParams, useRouter } from "next/navigation";

const BillboardClient = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Billboards (0)"
          description="Manage your Billboard Here"
        />
        <Button
          onClick={() => {
            router.push(`/${params.storeId}/billboards/new`);
          }}
        >
          <Plus className="mr-2 w-4 h-4" />
          Add Billboard
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default BillboardClient;
