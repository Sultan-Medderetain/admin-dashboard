import { UserButton, auth } from "@clerk/nextjs";
import MainNav from "./MainNav";
import StoreSwitcher from "./StoreSwitcher";
import { redirect } from "next/navigation";
import { db } from "@/lib/database/prisma";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await db.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b px-4">
      <div className="flex h-16 items-center justify-between">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="flex items-center justify-center gap-2">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
