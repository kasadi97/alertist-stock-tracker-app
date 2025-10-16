'use client'
import FooterLink from "@/components/forms/FooterLink"
import InputField from "@/components/forms/InputField"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

const SignIn = () => {
  const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
      defaultValues: {
        email: '',
        password: '',
      }, 
      mode: 'onBlur'
    })
    const onSubmit = async (data:SignInFormData) => {
      try{
        console.log(data)
      }catch(error){
        console.error("Error during sign in:", error)
      }
    }
  return (
    <>
      <h1 className="form-title">Login Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField 
            name="email"
            label="Email"
            placeholder="Enter your email"
            register={register}
            error={errors.email}
            validation={{ required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } }}
          />

          <InputField 
            name="password"
            label="Password"
            placeholder="Enter your password"
            register={register}
            error={errors.password}
            type="password"
            validation={{ 
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters" },
              pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Password must contain letters and numbers" }
            }}
          />
           <Button type="submit" className="yellow-btn w-full mt-5" disabled={isSubmitting}>
              {isSubmitting ? 'Signing In...' : 'Login'}
            </Button>

          <FooterLink text="Don't have an account?" linkText="Sign Up" href="/sign-up" />
      </form>
    </>
  )
}

export default SignIn