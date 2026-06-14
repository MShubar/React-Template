import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "@/services/mutations/auth/auth.hooks";
import {
  loginSchema,
  type LoginFormValues,
} from "@/services/mutations/auth/auth.schema";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import FormError from "@/components/ui/FormError";

export default function LoginPage() {
  const login = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    await login.mutateAsync(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input placeholder="Email" {...register("email")} />
        <FormError message={errors.email?.message} />
      </div>

      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <FormError message={errors.password?.message} />
      </div>

      <Button type="submit" disabled={login.isPending}>
        {login.isPending ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}