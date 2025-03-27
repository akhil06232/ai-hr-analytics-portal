
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, UserCheck, UserCog, UserMinus } from 'lucide-react';

export const EmployeeStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardContent className="p-4 flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-full">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
            <h4 className="text-2xl font-bold">348</h4>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex items-center gap-4">
          <div className="p-2 bg-green-100 rounded-full">
            <UserCheck className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Active</p>
            <h4 className="text-2xl font-bold">328</h4>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex items-center gap-4">
          <div className="p-2 bg-amber-100 rounded-full">
            <UserCog className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">On Leave</p>
            <h4 className="text-2xl font-bold">14</h4>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex items-center gap-4">
          <div className="p-2 bg-blue-100 rounded-full">
            <UserMinus className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">New This Month</p>
            <h4 className="text-2xl font-bold">6</h4>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
