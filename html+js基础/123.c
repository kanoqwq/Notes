#include<stdio.h>
#include<stdlib.h>
//输入n个数从大到小输出
int bsort(){
	int num=0,i,j,temp;
	int arr[10]={0};
	for(i=0;i<10;i++){
		scanf("%d",&arr[i]);
	}
	for(i=0;i<10;i++)
		for(j=0;j<10-i;j++){
			if(arr[j]>arr[j+1]){
				temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
		for(i=0;i<10;i++){
		printf("%d\t",arr[i]);
	return 0;
}
int reverse(int num){
	if(num/10 == 0)
		return num;
	else
		return reverse(num/10);
		printf("%d",num);
		
}
int main(){
		bsort();
		
}

