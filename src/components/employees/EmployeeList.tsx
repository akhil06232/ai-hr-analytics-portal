
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Mail, Phone } from 'lucide-react';

// Sample employee data
const employees = [
  {
    id: 1,
    name: 'Emma Thompson',
    email: 'emma.t@pulseHR.com',
    phone: '(555) 123-4567',
    department: 'Engineering',
    position: 'Senior Developer',
    status: 'Active',
    imageUrl: 'https://ui-avatars.com/api/?name=Emma+Thompson&background=random'
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.c@pulseHR.com',
    phone: '(555) 234-5678',
    department: 'Product',
    position: 'Product Manager',
    status: 'Active',
    imageUrl: 'https://ui-avatars.com/api/?name=Michael+Chen&background=random'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    email: 'sarah.j@pulseHR.com',
    phone: '(555) 345-6789',
    department: 'Marketing',
    position: 'Marketing Director',
    status: 'On Leave',
    imageUrl: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=random'
  },
  {
    id: 4,
    name: 'James Williams',
    email: 'james.w@pulseHR.com',
    phone: '(555) 456-7890',
    department: 'HR',
    position: 'HR Specialist',
    status: 'Active',
    imageUrl: 'https://ui-avatars.com/api/?name=James+Williams&background=random'
  },
  {
    id: 5,
    name: 'Alex Rodriguez',
    email: 'alex.r@pulseHR.com',
    phone: '(555) 567-8901',
    department: 'Engineering',
    position: 'Frontend Developer',
    status: 'Active',
    imageUrl: 'https://ui-avatars.com/api/?name=Alex+Rodriguez&background=random'
  },
];

type EmployeeListProps = {
  searchQuery: string;
};

export const EmployeeList: React.FC<EmployeeListProps> = ({ searchQuery }) => {
  // Filter employees based on search query
  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-6">
      <div className="rounded-md border">
        <table className="min-w-full divide-y divide-border">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3.5 text-left text-sm font-semibold text-muted-foreground">
                Employee
              </th>
              <th className="hidden md:table-cell px-4 py-3.5 text-left text-sm font-semibold text-muted-foreground">
                Department
              </th>
              <th className="hidden md:table-cell px-4 py-3.5 text-left text-sm font-semibold text-muted-foreground">
                Position
              </th>
              <th className="hidden md:table-cell px-4 py-3.5 text-left text-sm font-semibold text-muted-foreground">
                Status
              </th>
              <th className="px-4 py-3.5 text-right text-sm font-semibold text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {filteredEmployees.map((employee) => (
              <tr key={employee.id} className="hover:bg-muted/50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src={employee.imageUrl} alt={employee.name} />
                      <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{employee.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {employee.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden md:table-cell px-4 py-3 whitespace-nowrap text-sm">
                  {employee.department}
                </td>
                <td className="hidden md:table-cell px-4 py-3 whitespace-nowrap text-sm">
                  {employee.position}
                </td>
                <td className="hidden md:table-cell px-4 py-3 whitespace-nowrap">
                  <Badge variant={employee.status === 'Active' ? 'default' : 'secondary'}>
                    {employee.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
