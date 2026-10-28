import { auth, currentUser } from "@clerk/nextjs/server";

export default async function AccountPage() {
  const { isAuthenticated, redirectToSignIn } = await auth();

  if (!isAuthenticated) return redirectToSignIn();

  const user = await currentUser();

  return (
    <main className="mx-auto max-w-2xl px-6 pb-20 pt-16">
      <h1 className="text-2xl font-semibold tracking-tight">
        Hi{user?.firstName ? `, ${user.firstName}` : ""}
      </h1>
      <p className="mt-1 text-sm text-zinc-600">
        Manage your RailLine account.
      </p>

      <dl className="mt-8 divide-y divide-zinc-100 rounded-xl border border-zinc-200">
        <div className="flex justify-between px-5 py-4 text-sm">
          <dt className="text-zinc-500">Email</dt>
          <dd className="font-medium">
            {user?.primaryEmailAddress?.emailAddress ?? "-"}
          </dd>
        </div>
        <div className="flex justify-between px-5 py-4 text-sm">
          <dt className="text-zinc-500">Member since</dt>
          <dd className="font-medium">
            {user?.createdAt
              ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "-"}
          </dd>
        </div>
      </dl>

      <p className="mt-6 text-sm text-zinc-500">
        To change your name, password or photo, use the avatar menu in the top
        right.
      </p>
    </main>
  );
}
