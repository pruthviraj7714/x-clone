import FollowTabs from "@/components/FollowTabs";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="flex flex-col justify-center">
        <FollowTabs  />
        {children}
      </div>
    </section>
  );
}
