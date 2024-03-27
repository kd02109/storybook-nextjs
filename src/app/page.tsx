import Button from '@/app/_component/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Main</h1>
      <Button variant="active" isShadow position="fixed">
        TEST
      </Button>
    </main>
  );
}
