'use client'
import { motion } from 'framer-motion';
import UserProggresChart from '@/components/UserPostsChart'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="space-y-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold"
          >
            Welcome back
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm"
          >
            Here a quick snapshot of your Dashboard
          </motion.p>
        </div>
      </motion.div>

      <UserProggresChart />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card title="Active Projects">3</Card>
        <Card title="Pending Tasks">12</Card>
        <Card title="Messages">5</Card>
      </div>
    </div>
  )
}
