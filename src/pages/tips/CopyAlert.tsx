import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Copy, Server } from "lucide-react";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

const description = "saya yang dicopy";

export function CopyAlert() {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("Api berhasil di-copy");
  };
  return (
    <Alert>
      <Server className="h-4 w-4" />
      <AlertTitle>
        Copy alert
        <Badge variant={variantMap["public"]} className="ml-1">
          {textMap["public"]}
        </Badge>
      </AlertTitle>
      <AlertDescription className="mt-3 flex items-center justify-between">
        <code className="relative rounded bg-muted px-2 font-mono text-sm font-semibold">{description}</code>
        <Button variant="outline" size="sm" onClick={onCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
}
