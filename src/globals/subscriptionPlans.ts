
export interface ISubscriptionRawPlan {
  id: string;
  billing: string;
  color: string;
  header: string;
  monthlyPrice: string;
  planName: string | null;
  priceId: string | null;
  buttonText: string;
}
export interface ISubscriptionPrice {
  id: string;
  production: boolean;
  priceId: string | null;
}
export interface ISubscriptionPlan extends ISubscriptionRawPlan {
  isProduction: boolean;
}

const rawPlans: ISubscriptionRawPlan[] = [
  { id: 'Free', billing: 'per month', color: 'info', header: 'LIMITED FEATURES', monthlyPrice: '$0', planName: null, priceId: null, buttonText: 'Continue with free plan' },
  { id: 'Year', billing: 'per month, billed annually at $239.88/year', color: 'success', header: 'BEST VALUE!', monthlyPrice: '$19.99', planName: 'Annually ($239.88 / year)', priceId: null, buttonText: 'Choose Annual Plan' },
  { id: 'Month', billing: 'per month, billed monthly', color: 'primary', header: 'SHORTEST', monthlyPrice: '$29.99', planName: 'Monthly ($29.99 / month)', priceId: null, buttonText: 'Choose Monthly Plan' },
]

const priceIds: ISubscriptionPrice[] = [
  { id: 'Free', production: true, priceId: null },
  { id: 'Year', production: true, priceId: 'price_1KzRLOBBlx4pV7o4tD6kU5IR' },
  { id: 'Month', production: true, priceId: 'price_1KzRLOBBlx4pV7o4SqdV2aRL' },
  { id: 'Free', production: false, priceId: null },
  { id: 'Year', production: false, priceId: 'price_1KzRSZBBlx4pV7o4mm6aKWz3' }, // test
  { id: 'Month', production: false, priceId: 'price_1KzRSZBBlx4pV7o4ZiMcfEkG' }, // test
]

// stitch together plans and stripe priceIds based on whether we're in production or development (stripe test mode)
export const subscriptionPlans: ISubscriptionPlan[] = rawPlans.map((plan: ISubscriptionRawPlan)=>{
  const isProduction = true // import.meta.env.PROD==='production'
  const priceId = priceIds.reduce<string | null>((acc,cur)=>{
    if(cur.id===plan.id && cur.production===isProduction) return cur.priceId
    return acc===null ? null : acc
  },null)
  return {...plan, priceId, isProduction}
})